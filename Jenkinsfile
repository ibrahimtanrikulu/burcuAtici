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
                sh 'npm install'
            }
        } 
        stage('Build') {
            steps {
                sh 'npm run build -- --prod'
            }
        }
        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Build Completed on AWS EC2 Instance'
        }
    }
}
