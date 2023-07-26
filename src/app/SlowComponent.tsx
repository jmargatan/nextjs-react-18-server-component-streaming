type Prop = {
  rand: number;
  sleepInSeconds: number;
  style?: string;
};

const ApiProtocolAndDomain = !!process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export default async function SlowComponent({
  rand,
  sleepInSeconds,
  style = 'bg-red-900',
}: Prop) {
  const start = new Date().getTime();

  const res = await fetch(
    `${ApiProtocolAndDomain}/api/sleep?sec=${sleepInSeconds}&rand=${rand}`,
    { cache: 'no-store' }
  );

  const end = new Date().getTime();
  const durationInSec = (end - start) / 1000;

  if (!res.ok) {
    return (
      <div
        className={`max-w-sm text-white p-4 rounded-lg ${style}`}
        data-rand={rand}
      >
        Welp, should use ErrorBoundary.
      </div>
    );
  }

  return (
    <div
      className={`max-w-sm text-white p-4 rounded-lg ${style}`}
      data-rand={rand}
    >
      This component waited for {durationInSec} seconds to be returned.
    </div>
  );
}
