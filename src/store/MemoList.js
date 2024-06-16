import { create } from "zustand";

export const useMemoStore = create((set) => ({
  // return되는 객체 안이기 때문에 const 적어줄 필요X
  memoList: [],

  // 메모 추가 action 함수
  addMemo: (val) => set((prev) => ({
    memoList: [...prev.memoList, { content: val, id: new Date().getMilliseconds() + val },],
  })),
  removeMemo: (id) => set((prev) => ({ memoList: prev.memoList.filter((e) => e.id !== id) })),
}))