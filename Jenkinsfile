pipeline{
    agent any
    stages{
        stage("Checkout"){
            steps{
                echo "Performing checkout...."
                checkout scm
            }
            post{
                success{
                    echo "========Checkout executed successfully========"
                }
                failure{
                    echo "========Checkout execution failed========"
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
                echo "Checking link......."
                sh 'npm run lint'
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