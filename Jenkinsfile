pipeline {
    agent any

    environment {
        NODE_HOME = '/usr/local/bin/node'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub
                git 'https://github.com/Shraddhaj0602/my-node-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests
                script {
                    sh 'npm test'  // Replace with actual test command if any
                }
            }
        }

        stage('Build') {
            steps {
                // Build the application
                script {
                    sh 'npm run build'  // If applicable, replace with actual build command
                }
            }
        }

        stage('Deploy') {
            steps {
                // Deploy application (if you have deployment scripts)
                script {
                    sh './deploy.sh'  // Replace with your actual deploy script
                }
            }
        }
    }

    post {
        always {
            // Clean up
            echo 'Cleaning up'
        }
        success {
            // Success message
            echo 'Build and deployment succeeded!'
        }
        failure {
            // Failure message
            echo 'Build or deployment failed!'
        }
    }
}
