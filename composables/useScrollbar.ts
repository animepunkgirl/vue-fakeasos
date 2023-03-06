

type Size = 'regular' | 'thin'
export const useScrollbar = (size: Size = 'regular') => {
  const sizeClass = size === 'thin' ? 'scrollbar-thin' : 'scrollbar'
  const paddingClass = size == 'thin' ? 'pr-[8px]' : 'pr-[16px]'
  return [sizeClass, paddingClass, 'scrollbar-track-gray-300', 'scrollbar-thumb-gray-700']
}