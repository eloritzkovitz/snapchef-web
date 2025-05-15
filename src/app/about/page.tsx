export const metadata = {
  title: "About - SnapChef",
  description: "Learn more about SnapChef.",
};

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">About</h1>
        <div className="mt-4">
          <p>Elor Itzkovitz</p>
          <p>Yuval Lavi</p>
          <p>Adi Cahal</p>
          <p>Yonatan Cohen</p>
        </div>
      </div>
    </div>
  );
}