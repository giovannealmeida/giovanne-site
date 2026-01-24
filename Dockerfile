
# Usa uma imagem oficial do Node
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta que o React usa (geralmente 3000 ou 5173 no Vite)
EXPOSE 5173

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]