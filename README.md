# Full Stack BFHL API - VIT Question Paper

A REST API that processes arrays and returns categorized data including numbers, alphabets, special characters, and calculated results.

## Features

- **POST** endpoint at `/bfhl`
- Processes mixed data arrays (numbers, alphabets, special characters)
- Returns categorized results with proper formatting
- Handles exceptions gracefully
- Follows REST API best practices

## API Endpoint

- **URL**: `/bfhl`
- **Method**: POST
- **Status Code**: 200 (success)

## Request Format

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

## Response Format

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `is_success` | boolean | Operation status |
| `user_id` | string | Format: {full_name_ddmmyyyy} |
| `email` | string | Your email address |
| `roll_number` | string | Your college roll number |
| `odd_numbers` | array | Array of odd numbers as strings |
| `even_numbers` | array | Array of even numbers as strings |
| `alphabets` | array | Array of alphabets in uppercase |
| `special_characters` | array | Array of special characters |
| `sum` | string | Sum of all numbers as string |
| `concat_string` | string | Concatenated alphabets in reverse with alternating caps |

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd fullstack-bfhl-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update personal information**
   Edit `server.js` and replace:
   - `user_id`: Your name and date of birth
   - `email`: Your email address
   - `roll_number`: Your college roll number

4. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

The API will be available at `http://localhost:3000/bfhl`

## Testing

### Using cURL
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
```

### Using Postman
1. Set method to POST
2. Set URL to `http://localhost:3000/bfhl`
3. Set Headers: `Content-Type: application/json`
4. Set Body (raw JSON):
   ```json
   {
     "data": ["a", "1", "334", "4", "R", "$"]
   }
   ```

## Deployment

### Option 1: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option 2: Railway
1. Connect your GitHub repository
2. Deploy automatically on push

### Option 3: Render
1. Create new Web Service
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`

### Option 4: Heroku
1. Install Heroku CLI
2. Create app: `heroku create your-app-name`
3. Deploy: `git push heroku main`

## Important Notes

- **Numbers are returned as strings** as per requirements
- **User ID format**: lowercase name with date (e.g., "john_doe_17091999")
- **Exception handling** is implemented for robust operation
- **CORS enabled** for cross-origin requests
- **Input validation** ensures proper data format

## Example Test Cases

### Test Case 1
**Input**: `["a", "1", "334", "4", "R", "$"]`
**Expected**: Odd: ["1"], Even: ["334", "4"], Sum: "339"

### Test Case 2
**Input**: `["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]`
**Expected**: Odd: ["5"], Even: ["2", "4", "92"], Sum: "103"

### Test Case 3
**Input**: `["A", "ABcD", "DOE"]`
**Expected**: Alphabets: ["A", "ABCD", "DOE"], Sum: "0"

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - feel free to use this project for your VIT submission!

## Support

If you encounter any issues or have questions, please open an issue in the repository.
