export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  wait: number,
): (...args: any[]) => void {

  // Keep reference outside the return closure
  let timeOut: NodeJS.Timeout

  return function (...args): void {
    clearTimeout(timeOut)
    timeOut = setTimeout(() => fn(...args), wait)
  }
}

export function throttle<T extends (...args: any[]) => void>(
  fn: T,
  wait: number,
): (...args: any[]) => void {

  let lastCall: number | null = null;
  
  return (...args) => {
    const currentTime = Date.now()
    if (!lastCall || currentTime - lastCall >= wait){
      lastCall = currentTime
      fn(...args)
    }
  }
}

export function throttle2<T extends (...args: any[]) => void>(
  fn: T,
  wait: number,
): (...args: any[]) => void {

  let allowedToRun = true
  
  return (...args) => {
    if (allowedToRun) {
      fn(...args)
      
      allowedToRun = false;
      setTimeout(() => {
        allowedToRun = true
      }, wait)
    }
  }
}