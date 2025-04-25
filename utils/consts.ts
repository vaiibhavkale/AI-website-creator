export const defaultHTML = `<!DOCTYPE html>
<html>
  <head>
    <title>My app</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8">
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 100dvh;
        font-family: "Arial", sans-serif;
        text-align: center;
        background-color: #121212;
        color: #ffffff;
        margin: 0;
        position: relative;
      }
      
      .container {
        position: relative;
        z-index: 2;
      }
      
      h1 {
        font-size: 50px;
        text-shadow: 0 0 10px rgba(79, 174, 255, 0.5);
        transition: transform 0.3s ease;
      }
      
      h1:hover {
        transform: scale(1.05);
      }
      
      h1 span {
        color: #8e8eff;
        font-size: 32px;
        display: block;
        margin-bottom: 8px;
      }
      
      .arrow {
        position: absolute;
        bottom: 10px;
        left: 5%;
        width: 80px;
        /* Modified transform to rotate arrow 180 degrees to point left */
        transform: translateX(-50%) rotate(90deg);
        filter: drop-shadow(0 0 8px rgba(79, 174, 255, 0.8));
        animation: float 2s ease-in-out infinite;
      }
      
      .glow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, rgba(79, 174, 255, 0.2) 0%, rgba(79, 174, 255, 0.1) 30%, rgba(79, 174, 255, 0) 70%);
        border-radius: 50%;
        z-index: 1;
      }
      
      .particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
      }
      
      .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        animation: rise 15s linear infinite;
      }
      
      @keyframes float {
        0%, 100% {
          /* Updated animation keyframes to maintain the left-pointing orientation */
          transform: translateX(-50%) rotate(90deg) translateY(0);
        }
        50% {
          transform: translateX(-50%) rotate(90deg) translateY(-10px);
        }
      }
      
      @keyframes rise {
        0% {
          transform: translateY(100vh) scale(0);
          opacity: 0;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          transform: translateY(-100px) scale(1);
          opacity: 0;
        }
      }
      
      .btn {
        background: linear-gradient(135deg, #4f74e3, #8e8eff);
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 24px;
        font-size: 18px;
        margin-top: 24px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(79, 174, 255, 0.4);
      }
      
      .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 16px rgba(79, 174, 255, 0.6);
      }
    </style>
  </head>
  <body>
    <div class="glow"></div>
    <div class="particles" id="particles"></div>
    
    <div class="container">
      <h1>
        <span>We are ready to work for you,</span>
        Ask us anything.
      </h1>
      <button class="btn">Write prompt and Get Started</button>
    </div>
    
    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#8e8eff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="1" x2="12" y2="19"></line>
      <polyline points="19 12 12 19 5 12"></polyline>
    </svg>
    
    <script>
      // Create floating particles
      const particlesContainer = document.getElementById('particles');
      const particleCount = 20;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random opacity
        particle.style.opacity = String(Math.random() * 0.5 + 0.1);
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 15 + 's';
        
        // Random animation duration
        particle.style.animationDuration = Math.random() * 10 + 10 + 's';
        
        particlesContainer.appendChild(particle);
      }
    </script>
  </body>
</html>
`;