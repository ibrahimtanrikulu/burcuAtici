pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/ibrahimtanrikulu/burcuAtici.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps { 
                echo 'npm install done'
            }
        } 
        stage('Build') {
            steps {
                echo 'build done'
            }
        }
        stage('Archive Artifacts') {
            steps {
                echo 'dist done'
            }
        }
    }

    post {
        always {
            echo 'Build Completed on AWS EC2 Instance'
        }
    }
}
