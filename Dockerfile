# Build stage for the React Frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app

# Install required dependencies for SQLite compilation in alpine
RUN apk add --no-cache python3 make g++ 

COPY package*.json ./
# Install production dependencies only
RUN npm ci --omit=dev

# Copy the built frontend static assets
COPY --from=frontend-builder /app/dist ./dist

# Copy the backend server files
COPY server/ ./server/

# Set production environment variables
ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

# Start the Express server
CMD ["node", "server/index.cjs"]
