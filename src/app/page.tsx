import SlowComponent from '@/app/SlowComponent';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-6 space-y-6">
      <p className={`m-0 max-w-sm`}>
        In this demo, you will see 3 components that will be displayed in async
        manner.
      </p>

      <p className={`m-0 max-w-sm`}>
        With NextJS 13.4 and React 18, as much as possible, we should push any
        blocking call to the components that actually needs the data.
      </p>

      <p className={`m-0 max-w-sm`}>
        If possible, the frame / root of the page should be rendered with no
        blocking dependency call. Like this text.
      </p>

      {createSlowComponent(4, 'bg-orange-700')}

      {createSlowComponent(2, 'bg-green-800')}

      {createSlowComponent(7, 'bg-red-900')}

      <p className={`m-0 max-w-sm`}>
        Fork this page at:{' '}
        <a
          className="text-sky-500 font-semibold"
          href="https://github.com/jmargatan/nextjs-react-18-server-component-streaming"
          target="_blank"
        >
          github.com/jmargatan/nextjs-react-18-server-component-streaming
        </a>
        .
      </p>
    </main>
  );
}

const createSlowComponent = (sleepInSeconds: number, style?: string) => (
  <Suspense
    fallback={
      <div className="max-w-sm bg-gray-700 text-white p-4 rounded-lg animate-pulse">
        In <span className="font-semibold">{sleepInSeconds} seconds</span>, this
        placeholder will be replaced with a component.
      </div>
    }
  >
    <SlowComponent rand={Math.floor(Math.random() * 1000)} sleepInSeconds={sleepInSeconds} style={style} />
  </Suspense>
);
