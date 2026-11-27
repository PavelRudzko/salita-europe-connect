import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import geoJson from "@/assets/europe-countries.geo.json";

type Pos = [number, number]; // [lon, lat]

const WARSAW: Pos = [21.01, 52.23];

const DESTINATIONS: Record<string, Pos> = {
  Italy: [12.48, 41.89],
  Germany: [13.40, 52.52],
  "Czech Republic": [14.42, 50.09],
  Slovenia: [14.51, 46.05],
  Lithuania: [25.28, 54.69],
  Latvia: [24.11, 56.95],
  Estonia: [24.75, 59.44],
  Turkey: [32.86, 39.93],
};

type Ring = number[][];

type Feature = { properties: { name: string }; geometry: { type: string; coordinates: number[][][] | number[][][][] } };

const W = 800;
const H = 620;

function buildProjection(features: Feature[]) {
  const cosLat = Math.cos((53 * Math.PI) / 180);
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const walk = (c: unknown): void => {
    if (Array.isArray(c) && typeof c[0] === "number") {
      const [lon, lat] = c as number[];
      const x = lon * cosLat;
      const y = -lat;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
      return;
    }
    (c as unknown[]).forEach(walk);
  };
  features.forEach((f) => walk(f.geometry.coordinates));
  const pad = 24;
  const k = Math.min((W - pad * 2) / (maxX - minX), (H - pad * 2) / (maxY - minY));
  const ox = (W - k * (maxX - minX)) / 2 - k * minX;
  const oy = (H - k * (maxY - minY)) / 2 - k * minY;
  return (p: Pos): [number, number] => [k * p[0] * cosLat + ox, -k * p[1] + oy];
}

function ringsToPath(project: (p: Pos) => [number, number], rings: Ring[]): string {
  return rings
    .map((ring) =>
      ring
        .map((c, i) => {
          const [x, y] = project([c[0], c[1]]);
          return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
        })
        .join("") + "Z"
    )
    .join("");
}

export default function RouteMap({ routes }: { routes: string[] }) {
  const [selected, setSelected] = useState<string>(routes[0]);

  const { paths, project } = useMemo(() => {
    const features = (geoJson as { features: Feature[] }).features;
    const project = buildProjection(features);
    const paths = features.map((f) => ({
      name: f.properties.name,
      d:
        f.geometry.type === "Polygon"
          ? ringsToPath(project, f.geometry.coordinates as unknown as Ring[])
          : (f.geometry.coordinates as unknown as Ring[][])
              .map((rings) => ringsToPath(project, rings))
              .join(""),
    }));
    return { paths, project };
  }, []);

  const routeSet = new Set(routes);
  const warsaw = project(WARSAW);
  const dest = selected && DESTINATIONS[selected] ? project(DESTINATIONS[selected]) : null;

  const arc = (from: [number, number], to: [number, number]) => {
    const mx = (from[0] + to[0]) / 2;
    const my = (from[1] + to[1]) / 2;
    const dx = to[0] - from[0];
    const dy = to[1] - from[1];
    const cx = mx - dy * 0.18;
    const cy = my + dx * 0.18;
    return `M${from[0].toFixed(1)},${from[1].toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${to[0].toFixed(1)},${to[1].toFixed(1)}`;
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center">
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 content-start">
        {routes.map((route) => {
          const active = route === selected;
          return (
            <li key={route}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => setSelected(route)}
                className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                  active
                    ? "border-primary/60 bg-primary/15 text-foreground shadow-[0_0_24px_-8px_hsl(var(--primary)/0.5)]"
                    : "border-white/[0.06] bg-card/60 text-secondary-foreground hover:border-primary/30 hover:bg-primary/5"
                }`}
              >
                <MapPin size={16} className="text-primary shrink-0" />
                <span>{route}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="relative rounded-2xl border border-white/[0.06] bg-card/40 p-3 sm:p-5">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Illustrative map of routes from Warsaw" className="w-full h-auto select-none">
          <defs>
            <filter id="route-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {paths.map((p) => {
            const isRoute = routeSet.has(p.name);
            const isSelected = p.name === selected;
            return (
              <path
                key={p.name}
                d={p.d}
                fill={isSelected ? "hsl(217 91% 60% / 0.35)" : isRoute ? "hsl(217 91% 60% / 0.14)" : "hsl(225 30% 10%)"}
                stroke={isSelected ? "hsl(217 91% 60% / 0.9)" : "hsl(215 25% 35% / 0.6)"}
                strokeWidth={isSelected ? 1.4 : 0.8}
                style={isRoute ? { cursor: "pointer", transition: "fill 300ms" } : { transition: "fill 300ms" }}
                onClick={isRoute ? () => setSelected(p.name) : undefined}
              >
                {isRoute && <title>{p.name}</title>}
              </path>
            );
          })}
          {dest && (
            <g key={selected} filter="url(#route-glow)">
              <path d={arc(warsaw, dest)} fill="none" stroke="hsl(217 91% 60%)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="7 9" className="route-dash" />
              <path d={arc(dest, warsaw)} fill="none" stroke="hsl(199 89% 48% / 0.85)" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="4 10" className="route-dash" />
              <circle cx={dest[0]} cy={dest[1]} r="5" fill="hsl(217 91% 60%)" />
              <circle cx={dest[0]} cy={dest[1]} r="5" fill="none" stroke="hsl(217 91% 60%)" className="route-pulse" />
            </g>
          )}
          <circle cx={warsaw[0]} cy={warsaw[1]} r="6" fill="hsl(217 91% 60%)" filter="url(#route-glow)" />
          <circle cx={warsaw[0]} cy={warsaw[1]} r="6" fill="none" stroke="hsl(217 91% 60%)" className="route-pulse" />
          <text x={warsaw[0] + 10} y={warsaw[1] - 8} fill="hsl(210 40% 92%)" fontSize="15" fontWeight="600">Warsaw</text>
        </svg>
        <p className="text-xs text-muted-foreground mt-3 px-1">Illustrative map. Select a country to see the route from Warsaw.</p>
      </div>
    </div>
  );
}
