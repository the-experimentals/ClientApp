# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
# FROM node:14.17.5-alpine as build-stage
# WORKDIR /app
# COPY package*.json /app/
# RUN npm install
# COPY ./ /app/
# ARG configuration=production
# RUN npm run build -- --output-path=./dist/out --configuration $configuration

# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.21.1-alpine
# #Copy ci-dashboard-dist
# COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
# #Copy default nginx configuration
# COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

FROM node:14.17.5-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
EXPOSE 80

RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:1.21.1-alpine
COPY --from=build-step /app/dist/ClientApp /usr/share/nginx/html