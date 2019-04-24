pipeline {
  environment {
    registry = "buildarium/bdweb-app"
    registryCredential = 'dockerhub'
    dockerImage = ''
    HOME="."
    "$HOME=."
    "HOME=."
    'npm_config_cache=npm-cache'
    npm_config_cache='npm-cache'
  }

  agent any

  stages {
    stage('Test') {
      steps {
        checkout scm
      }
    }
    stage('Build') {
      steps {
        script {
          dockerImage = docker.build registry
        }
      }
    }
    stage('Deploy') {
      steps{
        script {
          docker.withRegistry('', registryCredential) {
            dockerImage.push("${env.BUILD_NUMBER}")
            if (env.BRANCH_NAME == 'master') {
              dockerImage.push("latest")
            } else if (env.BRANCH_NAME == 'develop') {
              dockerImage.push("dev")
            }
          }
        }
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}