import * as Geometric from "../geometric";

export function tilingWithSquares(px, py, width, height, side_len) {
  let tMap = new Map();
  let n = (width - px) / side_len;
  let m = (height - py) / side_len;
  let pi = px;
  let k = 1;

  let nombre_element = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      points = drawSquare(px, py, side_len);
      tMap.set(k, points);
      px += side_len;
      k++;
    }
    py += side_len;
    px = pi;
  }
  return tMap;
}

export function squareTiling(width, height, side_len) {
  const seed_square = Geometric.polygonRegular(
    4,
    calcArea(side_len, 4),
    [0, 300]
  );
  const n = Math.round(width / side_len);
  const m = Math.round(height / side_len);

  let k = 0,
    p = 0;
  let offset = 0;
  const tMap = new Map().set(k, seed_square);

  let a = side_len;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const square = Geometric.polygonTranslate(tMap.get(k), 0, 2 * a);
      tMap.set(++k, square);
      // tMap.set(k++, Geometric.polygonTranslate(tMap.get(k), 0, 2 * a));
    }
    offset += 2 * a;
    tMap.set(k + 1, Geometric.polygonTranslate(tMap.get(0), 30, offset));
  }

  return tMap;
}

export function squareTiling2(width, height, side_len) {
  let tMap = new Map();
  let x = 0;
  let y = 0;
  let k = 0;
  let offset = 0;
  let n = width / side_len;
  let m = height / side_len;
  let area = calcArea(side_len, 4);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      tMap.set(k++, Geometric.polygonRegular(4, area, [x + offset, y]));
      offset += side_len;
    }
    y += side_len;
    x = 0;
    offset = 0;
  }
  return tMap;
}

export function tilingWithHexa(width, height, side_len) {
  const seed_hex = Geometric.polygonRegular(6, calcArea(side_len, 6), [0, 0]);
  const a = Math.round(Geometric.lineLength([seed_hex[0], seed_hex[1]]));
  const b = Math.round(Math.sqrt(Math.pow(a, 2) - Math.pow(a, 2) / 4));
  const n = Math.round(width / side_len);
  const m = Math.round(height / side_len);

  let k = 0;
  let offset = 0;
  let origin_hex;
  const tMap = new Map().set(k, seed_hex);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== 0 || j !== 0) {
        const hex = Geometric.polygonTranslate(
          tMap.get(k),
          j % 2 === 0 ? -30 : 30,
          2 * b
        );
        tMap.set(++k, hex);
      }
    }
    offset += 2 * b;
    origin_hex = Geometric.polygonRegular(6, calcArea(side_len, 6), [
      0,
      offset,
    ]);
    tMap.set(++k, origin_hex);
  }

  return tMap;
}

function tilingWithTriangles() {}
function tilingWithDeca() {}

export function drawSquare(px, py, side_len) {
  let pts = [
    [px, py],
    [px + side_len, py],
    [px + side_len, py + side_len],
    [px, py + side_len],
  ];
  return pts;
}

function calcArea(side_len, n) {
  const perimeter = side_len * n;
  const apothem = side_len / (2 * Math.tan(Math.PI / n));
  return (apothem * perimeter) / 2;
}
