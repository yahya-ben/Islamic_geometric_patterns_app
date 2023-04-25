import * as Geometric from "./geometric";
export function motif(tile, contact_angle) {
  const mids = polygonMidpoints(tile);
  const n = tile.length;
  let rays = [];
  let motifs = [];

  for (let i = 0; i < n; i++) {
    let ray_R = Geometric.lineRotate(
      [mids[i], tile[i]],
      contact_angle,
      mids[i]
    );

    let ray_L = Geometric.lineRotate(
      [mids[i], tile[(i + 1) % n]],
      -contact_angle,
      mids[i]
    );

    rays.push([ray_R, ray_L]);
  }

  for (let j = 0; j < n; j++) {
    let intersection = getIntersection(rays[j][1], rays[(j + 1) % n][0]);
    intersection[0] = Math.round(intersection[0]);
    intersection[1] = Math.round(intersection[1]);
    motifs.push(intersection);
    motifs.push(mids[(j + 1) % n]);
  }

  return motifs;
}

// Trouve l'intersection de deux lignes
// function getIntersection(line1, line2) {
//   // Convert line1 into a ray with starting point p1 and direction vector v1
//   const p1 = line1[0];
//   const v1 = [line1[1][0] - p1[0], line1[1][1] - p1[1]];

//   // Convert line2 into a ray with starting point p2 and direction vector v2
//   const p2 = line2[0];
//   const v2 = [line2[1][0] - p2[0], line2[1][1] - p2[1]];

//   // Compute the intersection point of the two rays
//   const det = v1[0] * v2[1] - v1[1] * v2[0];
//   if (det === 0) {
//     // The rays are parallel, so they do not intersect
//     return null;
//   } else {
//     const t1 = ((p2[0] - p1[0]) * v2[1] - (p2[1] - p1[1]) * v2[0]) / det;
//     const t2 = ((p2[0] - p1[0]) * v1[1] - (p2[1] - p1[1]) * v1[0]) / det;
//     if (t1 >= 0 && t2 >= 0) {
//       // The rays intersect at the point p1 + t1 * v1
//       const x = Math.round(p1[0] + t1 * v1[0]);
//       const y = Math.round(p1[1] + t1 * v1[1]);
//       return [x, y];
//     } else {
//       // The rays do not intersect
//       return null;
//     }
//   }
// }

function getIntersection(line1, line2) {
  // Convert line1 into a ray with starting point p1 and direction vector v1
  const p1 = line1[0];
  const v1 = [line1[1][0] - p1[0], line1[1][1] - p1[1]];

  // Convert line2 into a ray with starting point p2 and direction vector v2
  const p2 = line2[0];
  const v2 = [line2[1][0] - p2[0], line2[1][1] - p2[1]];

  // Compute the intersection point of the two rays
  const det = v1[0] * v2[1] - v1[1] * v2[0];
  if (det === 0) {
    // The rays are parallel, so they do not intersect
    return [p1[0] + 1, p1[1] + 1]; // return a close point to p1
  } else {
    const t1 = ((p2[0] - p1[0]) * v2[1] - (p2[1] - p1[1]) * v2[0]) / det;
    const t2 = ((p2[0] - p1[0]) * v1[1] - (p2[1] - p1[1]) * v1[0]) / det;
    if (t1 >= 0 && t2 >= 0) {
      // The rays intersect at the point p1 + t1 * v1
      const x = Math.round(p1[0] + t1 * v1[0]);
      const y = Math.round(p1[1] + t1 * v1[1]);
      return [x, y];
    } else {
      // The rays do not intersect
      return [p1[0] + 1, p1[1] + 1]; // return a close point to p1
    }
  }
}

function polygonMidpoints(pts) {
  let midpoints = [];
  for (let i = 0; i < pts.length; i++) {
    let midpoint = Geometric.lineMidpoint([
      pts[i],
      pts[i + 1 !== pts.length ? i + 1 : 0],
    ]);
    midpoint[0] = Math.round(midpoint[0]);
    midpoint[1] = Math.round(midpoint[1]);
    midpoints.push(midpoint);
  }
  return midpoints;
}
