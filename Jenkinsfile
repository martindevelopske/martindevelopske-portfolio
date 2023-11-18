pipeline {
    agent any
    stages {
        stage("Checkout") {
            steps {
                echo "Performing checkout...."
                checkout scmGit(branches: [[name: '*/main']], extensions: [], 
                  userRemoteConfigs: [[credentialsId: 'github-token',
                  url: 'https://github.com/martindevelopske/portfolio-redone.git']])
            }
            post {
                success {
                    echo "========Code Checkout executed successfully========"
                }
                failure {
                    echo "========Code Checkout execution failed========"
                }
            }
        }
        stage("Install Dependencies"){
            steps{
                echo "Installing dependencies......."
                sh 'npm install'
            }
            post{
                success{
                    echo "========Dependencies installed successfully========"
                }
                failure{
                    echo "========Dependencies installation failed========"
                }
            }
        }
        stage("Test"){
            steps{
                echo "Performing tests......."
                sh 'npm run test'
            }
            post{
                success{
                    echo "========Tests performed successfully========"
                }
                failure{
                    echo "========Tests failed========"
                }
            }
        }
        stage("Static Code Analysis"){
            steps{
                echo "Checking lint......."

                sh 'eslint -c config.eslintrc -f checkstyle /src/* > eslint.xml'

            }
            post{
                success{
                    echo "========Lint run successfully========"
                }
                failure{
                    echo "========Lint failed========"
                }
            }
        }
        stage("Build"){
            steps{
                echo "Building your project......."
                sh 'npm run build'
            }
            post{
                success{
                    echo "========Project Build successfully========"
                }
                failure{
                    echo "========Build failed========"
                }
            }
        }
    }
    post{
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}