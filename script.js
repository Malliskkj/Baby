document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector('.cube');
    let isDragging = false;
    let previousMouseX, previousMouseY;
    let rotationX = 0, rotationY = 0;
    let cubesCreated = false; // Variável para controlar se os cubos já foram criados

    document.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - previousMouseX;
            const deltaY = e.clientY - previousMouseY;
            rotationX += deltaY * 0.5;
            rotationY += deltaX * 0.5;
            cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            previousMouseX = e.clientX;
            previousMouseY = e.clientY;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    document.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    // Função para criar cubos caindo com imagens locais
    function createFallingCube(imageUrls) {
        const fallingCube = document.createElement('div');
        fallingCube.className = 'falling-cube';
        fallingCube.style.left = Math.random() * 100 + 'vw';
        fallingCube.style.animationDuration = Math.random() * 5 + 3 + 's';
        fallingCube.style.animationDelay = Math.random() * 5 + 's';
        fallingCube.style.animationIterationCount = 'infinite';
        
        const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
        faces.forEach((face, index) => {
            const faceDiv = document.createElement('div');
            faceDiv.className = `falling-cube__face falling-cube__face--${face}`;
            if (face !== 'interior-front' && face !== 'interior-back' && face !== 'interior-right'
                && face !== 'interior-left' && face !== 'interior-top' && face !== 'interior-bottom') {
                const img = document.createElement('img');
                img.src = 'img/' + imageUrls[index]; // Caminho relativo para as imagens locais
                faceDiv.appendChild(img);
            }
            fallingCube.appendChild(faceDiv);
        });

        document.body.appendChild(fallingCube);
    }

    // Adiciona texto "CLIQUE AQUI" no cubo principal
    const mainCube = document.getElementById('mainCube');
    const frontFace = mainCube.querySelector('.cube__face--front');
    frontFace.textContent = 'CLIQUE AQUI';
    frontFace.style.backgroundColor = '#fff'; // Branco
    frontFace.style.color = '#000'; // Texto branco
    frontFace.style.display = 'flex';
    frontFace.style.alignItems = 'center';
    frontFace.style.justifyContent = 'center';
    frontFace.style.fontSize = '12px';
    frontFace.style.textTransform = 'uppercase';
    frontFace.style.fontFamily = 'Arial, sans-serif';

    // Evento de clique no cubo principal
    mainCube.addEventListener('click', () => {
        if (!cubesCreated) {
            cubesCreated = true;
            // URLs das imagens para os cubos caindo (imagens locais)
            const imageUrls = [
                'frente.jpeg',
                'tras.jpeg',
                'esquerda.jpeg',
                'direita.jpg',
                'esqueda.jpg',
                'cima.jpg'
            ];
            // Adiciona cubos caindo com imagens
            for (let i = 0; i < 50; i++) {
                createFallingCube(imageUrls)
                createFallingCube(imageUrls);
                }
    
                // Inicia a reprodução da música
                const audioPlayer = document.getElementById('audioPlayer');
                audioPlayer.play();
            }
        });
    });
    
