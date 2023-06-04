import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import particlesConfig from 'components/Particle/config';

const Particle = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={particlesConfig}
      init={particlesInit}
    />
  );
};

export default Particle;
