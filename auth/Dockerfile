# ===== BUILD STAGE =====
# Use Node.js 22 Alpine for building the application
FROM node:22-alpine AS builder

# Set working directory for build stage
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies like @nestjs/cli)
# We need these for building the application
RUN npm ci

# Copy source code
COPY . .

# Build the NestJS application
# This creates the dist/ directory with compiled JavaScript
RUN npm run build

# ===== PRODUCTION STAGE =====
# Use Node.js 22 Alpine for the final production image
FROM node:22-alpine AS production

# Set working directory for production
WORKDIR /app

# Copy package files to production stage
COPY package*.json ./

# Install ONLY production dependencies
# This keeps the final image smaller and more secure
RUN npm ci --only=production && npm cache clean --force

# Copy the built application from the builder stage
# Only copy the compiled dist/ folder, not the source code
COPY --from=builder /app/dist ./dist

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S sarathcani -u 1001 -G nodejs

# Change ownership of the app directory to the non-root user
RUN chown -R sarathcani:nodejs /app

# Switch to the non-root user
USER sarathcani

# Expose port 3000
EXPOSE 3000

# Start the application using the compiled JavaScript
# Use 'node dist/main' instead of 'npm run start:prod' for better performance
CMD ["node", "dist/main"]