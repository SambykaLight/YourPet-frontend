export const selectNotices = state => state.notices.items;
export const selectTotalPages = state => state.notices.totalPages;
export const selectIsNoticeLoading = state => state.notices.isLoading;
export const selectPage = state => state.notices.page;

const noticeSelectors = {
  selectNotices,
  selectTotalPages,
  selectIsNoticeLoading,
  selectPage,
};

export default noticeSelectors;
