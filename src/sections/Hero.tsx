export default function Hero() {
  return (
    <div className="flex justify-center items-center bg-lightgray  dark:text-white dark:bg-black w-full p-3 h-700 text-white">
      <div className="flex flex-col w-5/6 border border-red-700 h-600 p-2 justify-between">
        <div>Martin Ndung'u</div>
        <div>
          <div>I build</div>
          <div>beautiful experiences</div>
          <div>for the web.</div>
        </div>
        <div>line</div>
        <div className="flex justify-between items-center">
            <div>software engineer and dev ops</div>
            <div>socials</div>
        </div>
      </div>
    </div>
  );
}
