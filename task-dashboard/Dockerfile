FROM node:18

WORKDIR /app

# Copy backend
COPY backend ./backend

# Copy frontend
COPY frontend ./frontend

# Install backend dependencies
WORKDIR /app/backend
RUN npm install

# Install frontend dependencies and build
WORKDIR /app/frontend
RUN npm install && npm run build

# Start backend
WORKDIR /app/backend
EXPOSE 8080
CMD ["node", "server.js"]
