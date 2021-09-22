export function distanciaEuclidiana(pontoA, pontoB) {
  if (!pontoA || !pontoB)
    return NaN;
  const diffX = pontoA.x - pontoB.x;
  const diffY = pontoA.y - pontoB.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
}
export function getPositionFromEvent(event) {
  if (event.touches && event.touches.length > 0) {
    return { x: event.touches[0].screenX, y: event.touches[0].screenY };
  }
  else if (event.changedTouches && event.changedTouches.length > 0) {
    return {
      x: event.changedTouches[0].screenX,
      y: event.changedTouches[0].screenY,
    };
  }
  else if (event.screenX && event.screenY) {
    return { x: event.screenX, y: event.screenY };
  }
  else {
    return undefined;
  }
}
