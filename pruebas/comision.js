// Comisión en centavos enteros (evita errores de coma flotante).
// tasaPorMil = 5 significa 0,5 %.
export function comision(centavos, tasaPorMil) {
  return Math.round((centavos * tasaPorMil) / 1000); // redondeo al centavo más cercano
}
