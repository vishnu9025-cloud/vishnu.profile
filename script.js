// CYBER_OBSIDIAN // Functional Logic
// Vishnu Inbaraj // Architectural Logic Execution

// 1. Reveal Elements on Scroll
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 120;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

// 2. Smooth Scroll for Anchor Links (Inter-page and Intra-page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetID = this.getAttribute('href');
        if (targetID === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(targetID);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 3. Contact Formspree Integration
// 3. Neural Security Sanitization Layer
const sanitizeInput = (str) => {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML.replace(/[<>]/g, ''); // Double-layer stripping
};

const contactForm = document.getElementById("contact-form");
const formID = "mwvnajwv"; // Preserving existing Formspree ID

if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const submitBtn = contactForm.querySelector(".submit-btn");
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = "AUDITING_PAYLOAD...";
        submitBtn.disabled = true;

        const formData = new FormData(contactForm);
        
        // Secure Payload Processing
        const sanitizedData = new FormData();
        for (const [key, value] of formData.entries()) {
            sanitizedData.append(key, sanitizeInput(value));
        }

        try {
            const response = await fetch("https://formspree.io/f/" + formID, {
                method: "POST",
                body: sanitizedData,
                headers: { Accept: "application/json" }
            });

            if (response.ok) {
                submitBtn.innerHTML = "CONNECTION_ESTABLISHED ✅";
                submitBtn.style.color = "#a7f3d0"; // emerald-200
                contactForm.reset();
            } else {
                submitBtn.innerHTML = "SYNC_FAILED ❌";
                submitBtn.style.color = "#fecaca"; // red-200
            }
        } catch (error) {
            submitBtn.innerHTML = "NETWORK_ERROR ❌";
        }

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.color = "";
            submitBtn.disabled = false;
        }, 4000);
    });
}

// 4. Global Background 3D Neural Engine
const initGlobal3D = () => {
    const canvas = document.getElementById('bg-canvas-3d');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 12; // Further back for background

    // 1. Digital Core Base (Subtle Background Anchor)
    const geometry = new THREE.IcosahedronGeometry(8, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x72dcff, wireframe: true, transparent: true, opacity: 0.05 });
    const core = new THREE.Mesh(geometry, material);
    scene.add(core);

    // 2. Large Interactive Particle Cloud
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 40;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMat = new THREE.PointsMaterial({ size: 0.05, color: 0x72dcff, transparent: true, opacity: 0.4 });
    const particleCloud = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleCloud);

    // Mouse Interaction
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) / 2000;
        mouseY = (e.clientY - window.innerHeight / 2) / 2000;
    });

    // Resize Handling
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const animate = () => {
        requestAnimationFrame(animate);

        core.rotation.x += 0.001;
        core.rotation.y += 0.001;

        particleCloud.rotation.y += 0.0005 + mouseX;
        particleCloud.rotation.x += mouseY;

        // Subtle Breathing
        const pulse = Math.sin(Date.now() * 0.001) * 0.05 + 1;
        core.scale.set(pulse, pulse, pulse);

        renderer.render(scene, camera);
    };

    animate();
};

// 5. Unique Bio Section Entity (Crystal Core)
const initBioEntity3D = () => {
    const canvas = document.getElementById('bio-entity-3d');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 4;

    // Diamond / Crystal Geometry (Unique Architecture)
    const geometry = new THREE.OctahedronGeometry(2, 0);
    const material = new THREE.MeshPhongMaterial({ 
        color: 0x72dcff, 
        wireframe: true, 
        emissive: 0x00d2ff, 
        transparent: true, 
        opacity: 0.8,
        shininess: 100
    });
    
    const crystal = new THREE.Mesh(geometry, material);
    scene.add(crystal);

    // Inner Core Glow
    const innerGeo = new THREE.IcosahedronGeometry(0.8, 1);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0x6d9bff, wireframe: true, transparent: true, opacity: 0.3 });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerCore);

    // Lights
    const light = new THREE.PointLight(0xffffff, 1, 10);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040, 2));

    const animate = () => {
        requestAnimationFrame(animate);

        crystal.rotation.y += 0.01;
        crystal.rotation.z += 0.005;
        innerCore.rotation.y -= 0.02;

        const pulse = Math.sin(Date.now() * 0.003) * 0.1 + 1;
        crystal.scale.set(pulse, pulse, pulse);

        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        renderer.render(scene, camera);
    };

    animate();
};

// 6. Home Page Hero Entity (Neural Sphere)
const initHomeEntity3D = () => {
    const canvas = document.getElementById('home-entity-3d');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 6;

    // Macro Neural Sphere
    const geometry = new THREE.IcosahedronGeometry(3.5, 2);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x72dcff, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.15 
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Inner Core Pulsar
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const coreMat = new THREE.MeshPhongMaterial({ color: 0x00d2ff, wireframe: true, emissive: 0x72dcff });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Dynamic Connections (Points)
    const pointsCount = 40;
    const pointsGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
    }
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({ size: 0.1, color: 0x72dcff, transparent: true, opacity: 0.8 });
    const connections = new THREE.Points(pointsGeo, pointsMat);
    scene.add(connections);

    // Lights
    const p1 = new THREE.PointLight(0x72dcff, 1, 10);
    p1.position.set(5, 5, 5);
    scene.add(p1);
    scene.add(new THREE.AmbientLight(0x404040, 1));

    const animate = () => {
        requestAnimationFrame(animate);

        sphere.rotation.y += 0.002;
        sphere.rotation.x += 0.001;
        core.rotation.y -= 0.01;
        connections.rotation.y += 0.005;

        // Neural Pulse
        const scale = Math.sin(Date.now() * 0.001) * 0.1 + 1;
        sphere.scale.set(scale, scale, scale);
        core.scale.set(1.1 - (scale - 1), 1.1 - (scale - 1), 1.1 - (scale - 1));

        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        renderer.render(scene, camera);
    };

    animate();
};

// 7. Mobile Navigation Architecture
const initMobileMenu = () => {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const close = document.getElementById('mobile-menu-close');

    if (!toggle || !menu || !close) return;

    toggle.addEventListener('click', () => {
        menu.classList.remove('translate-x-full');
    });

    close.addEventListener('click', () => {
        menu.classList.add('translate-x-full');
    });

    // Close on link click
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('translate-x-full');
        });
    });
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log("%c SECURITY_AUDIT_V1.0 // ARCHITECT_CONNECTED // ALL_SYSTEMS_ENCRYPTED", "color: #72dcff; font-weight: bold; font-size: 12px; font-family: 'JetBrains Mono'");
    revealElements();
    initGlobal3D();
    initBioEntity3D();
    initHomeEntity3D();
    initMobileMenu();
    window.addEventListener('scroll', revealElements);
});