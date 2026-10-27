// Comisión en centavos enteros (evita errores de coma flotante).
// tasaPorMil = 5 significa 0,5 %.
export function comision(centavos, tasaPorMil) {
  return Math.floor((centavos * tasaPorMil) / 1000); // error: trunca en vez de redondear
}
