# Portfolio Room 🎮

An interactive 3D portfolio developed with React and Three.js, featuring an immersive virtual room environment.

![Portfolio Room Preview](public/preview.png)

## 🚀 Features

- Interactive 3D environment rendered with Three.js
- Custom optimized 3D models
- Dynamic lighting system
- Audio player with waveform visualization
- Modern responsive interface
- Light/Dark themes
- Integrated contact form
- Smooth GSAP animations
- Custom camera controls

## 🛠️ Technologies

- React 18
- Vite
- Three.js
- React Three Fiber
- Styled Components
- GSAP
- WaveSurfer.js
- EmailJS
- Zustand

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio-room.git
cd portfolio-room
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Access `http://localhost:5173` in your browser

## 🔧 Available Scripts

- `yarn dev`: Start development server
- `yarn build`: Generate production build
- `yarn preview`: Preview production build locally
- `yarn format`: Format code with Prettier
- `yarn format:check`: Check code formatting
- `yarn lint`: Run ESLint
- `yarn lint:fix`: Automatically fix linting issues

## 🎮 Controls

- **Mouse**: Rotate camera
- **Scroll**: Navigate through experience
- **Click**: Interact with elements
- **ESC Key**: Return to initial camera position

## 🌐 Debug Mode

To access debug mode, add `#debug` to the project URL. This will enable:
- Leva control panel
- Performance statistics
- Debug helpers

## 📱 Compatibility

The project is optimized for:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Recommended:
- Dedicated GPU
- 8GB+ RAM
- Stable internet connection

## 🎨 Themes

The project supports two themes:
- Light: Minimalist design with light colors
- Dark: Dark interface with neon accents

## 📝 Project Structure

```
portfolio-room/
├── public/
│   ├── models/         # GLTF 3D models
│   ├── media/         # Media files
│   └── ...
├── src/
│   ├── components/    # React components
│   │   ├── models/   # 3D model components
│   │   ├── UI/      # Interface components
│   │   └── ...
│   ├── hooks/        # Custom hooks
│   ├── utils/        # Utilities
│   └── ...
└── ...
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Email Configuration

The project uses EmailJS for the contact form. Set up your credentials:
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service
3. Create a template
4. Add credentials to the `.env` file

## 🎯 Optimizations

### 3D Models
- Use the `npx gltfjsx` command to optimize models:
```bash
npx gltfjsx@6.5.0 ./public/models/ModelName.gltf -o ./src/components/models/ModelName.jsx -r public -k --shadows
```

### Performance
- Controlled DPR (Device Pixel Ratio)
- Lazy component loading
- Texture optimization
- Efficient shadow system

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

### 3D Models
- Multipainkiller Studio (https://sketchfab.com/Multipainkiller_Studio) for the envelope model
- tolotedesign (https://sketchfab.com/tolotedesign) for the bike model
- Roman Klco and Polycon Runway (https://polygonrunway.com/) for the gramophone model

## 📞 Contact

For questions and suggestions, please open an [issue](https://github.com/your-username/portfolio-room/issues).

## 🔮 Next Steps

- [ ] Unit tests implementation
- [ ] Accessibility improvements
- [ ] Mobile device support
- [ ] Performance optimization
- [ ] Component documentation
- [ ] Analytics system