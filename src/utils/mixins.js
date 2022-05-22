export const emptyImageFilter = {
  filters: {
    emptyCover(src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    },
    emptyAvatar(src) {
      return src || 'https://img.onl/H5eDF2'
    }
  }
}