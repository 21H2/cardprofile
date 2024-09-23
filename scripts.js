body {
  margin: 0;
  padding: 0;
  background-color: black;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.card {
  position: relative;
  width: 90%;
  max-width: 900px;
  padding: 2rem;
  border-radius: 1.5rem;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: glowAnimation 3s infinite alternate;
  z-index: 2;
}

@keyframes glowAnimation {
  0% { box-shadow: 0 0 20px rgba(255, 20, 147, 1); }
  50% { box-shadow: 0 0 30px rgba(128, 0, 128, 1); }
  100% { box-shadow: 0 0 20px rgba(255, 255, 255, 1); }
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid white;
}

.info h1, .info p {
  color: white;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.info h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
}

.info p {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid white;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.grid-item {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 1rem;
  transition: transform 0.3s;
}

.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

.grid-item span {
  color: white;
  margin-left: 1rem;
}
