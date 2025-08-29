# Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended - Fastest)
```bash
npm i -g vercel
vercel
```

### 2. Railway
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Deploy automatically on push

### 3. Render
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect your GitHub repository
4. Build Command: `npm install`
5. Start Command: `npm start`

### 4. Heroku
```bash
heroku create your-app-name
git push heroku main
```

## Before Deploying

### 1. Update Personal Information
Edit `server.js` and replace:
```javascript
user_id: "your_name_ddmmyyyy",
email: "your.email@example.com",
roll_number: "YOUR123",
```

### 2. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Full Stack BFHL API"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

## Post-Deployment

### 1. Test Your Live API
```bash
curl -X POST https://your-app.vercel.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
```

### 2. Submit to VIT Form
- Form Link: https://forms.office.com/r/ZeVpUYp3zV
- Submit your API endpoint URL (with `/bfhl`)

## Important Notes

**API Requirements Met:**
- POST endpoint at `/bfhl` ✓
- Returns all required fields ✓
- Numbers as strings ✓
- Proper error handling ✓
- Status code 200 ✓

**Best Practices:**
- Exception handling ✓
- Input validation ✓
- CORS enabled ✓
- Clean code structure ✓

## Troubleshooting

### Common Issues:
1. **Port already in use**: Change PORT in server.js
2. **CORS errors**: CORS is already configured
3. **Deployment fails**: Check your platform's requirements

### Need Help?
- Check the README.md for detailed setup
- Review the test.js file for examples
- Ensure all dependencies are installed
