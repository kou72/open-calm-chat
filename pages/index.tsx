export default function Home() {
  return (
    <div className="bg-green-100 min-h-screen">
      <div className="h-[calc(100vh-160px)] flex flex-col items-center overflow-y-auto">
        <div className="flex justify-center text-4xl font-mono font-extrabold text-gray-700 py-12 w-full">
          open-calm-chat
        </div>
        <div className="w-[80%] sm:w-[512px] flex flex-col justify-center gap-4 text-sm mb-8">
          <div className="rounded-3xl bg-white py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-gray-300 py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-white py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-gray-300 py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-white py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-gray-300 py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-white py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-gray-300 py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-white py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-gray-300 py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-white py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-gray-300 py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-white py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-gray-300 py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-white py-2 px-4">Coming soon...</div>
          <div className="rounded-3xl bg-gray-300 py-2 px-4">Coming soon...</div>
        </div>
        <div className="w-[80%] sm:w-[512px] fixed bottom-0 mb-16">
          <textarea
            className="w-full h-24 py-2 px-4 text-sm border-2 border-gray-400 focus:border-gray-500 rounded-xl resize-none"
            style={{ outline: "none", boxShadow: "none" }}
          />
        </div>
        <div className="w-full h-12 flex justify-center fixed bottom-0 bg-white border-t border-gray-300 ">
          <div className="w-80 flex justify-evenly items-center h-full">
            <button className="w-28 bg-white border border-green-500 rounded-full py-1">
              履歴リセット
            </button>
            <button className="w-28 bg-green-300 rounded-full py-1">送信</button>
          </div>
        </div>
      </div>
    </div>
  );
}
