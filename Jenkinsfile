pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout from repo'
                checkout scm
            }
        }
        stage('Install') {
            steps {
                echo 'Building server'
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Startint server'
                sh 'npm start'
            }
        }
        // OR you can just test the app within Docker containers
        //
        // stage('Docker build') {
        //     steps {
        //         echo 'Building docker image'
        //         sh 'docker build -t charges-server-pipeline:latest .'
        //     }
        // }
        // stage('Docker run') {
        //     steps {
        //         echo 'Running docker image'
        //         sh 'docker run -p 3001:3001 --name charges-server-pipeline charges-server-pipeline:latest'
        //     }
        // }
    }
}