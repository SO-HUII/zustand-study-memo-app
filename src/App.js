import MemoBoard from "./components/MemoBoard";
import MemoElem from "./components/MemoElem";
import MemoInput from "./components/MemoInput";
import { useMemoStore } from "./store/MemoList";

function App() {
  const { memoList } = useMemoStore();
  return (
    <>
      <MemoBoard>
        {memoList.length ? (
          memoList.map((e) => {
            return (
              <MemoElem key={e.id} id={e.id}>
                {e.content}
              </MemoElem>
            );
          })
        ) : (
          <p>메모를 입력해주세요</p>
        )}
      </MemoBoard>
      <MemoInput />
    </>
  );
}

export default App;
