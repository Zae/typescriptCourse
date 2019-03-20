function devide(baseNumber: number, factor: number) {
  return factor === 0 ? Error('Cant devide baseNumber by zero') : baseNumber / factor
}

const som = devide(4, 0)
