import FirstScene from './components/FirstScene';
import { Scene } from './components/Scene';

export default function SeenStoryPage() {
  return (
    <div>
      {/* <Scene /> */}
      <FirstScene />
      {/* You can add a div here after the scene to prove the pinning works */}
      <div className="h-screen w-full bg-gray-800 flex items-center justify-center">
        <h2 className="text-4xl text-white">The story continues...</h2>
      </div>
    </div>
  );
}