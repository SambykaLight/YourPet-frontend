export const selectNotices = state => state.notices.items;
export const selectTotalPages = state => state.notices.totalPages;
export const selectIsNoticeLoading = state => state.notices.isLoading;
export const selectCategory = state => state.notices.category;

const noticeSelectors = {
  selectNotices,
  selectTotalPages,
  selectIsNoticeLoading,
  selectCategory,
};

export default noticeSelectors;
