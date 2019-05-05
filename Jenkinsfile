pipeline {
    agent any

    node {
        try {
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
        } catch(Exception e) {
            error e
        } finally {
            cleanWs()
            // sh 'docker stop charges-server-pipeline'
            // sh 'docker rm charges-server-pipeline'
            // sh 'docker rmi charges-server-pipeline:latest'
        }
    }
}