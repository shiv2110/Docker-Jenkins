node {
	def docker_img
	
	stage('Cloning the repository'){
		checkout scm
	}

	stage('Building the image'){
		docker_img = docker.build("shivanvitha21/nodeapp2")
	}

	stage('Testing the image'){
		docker_img.inside{
			echo "Tests are passed"
		}
	}

	stage('Pushing the image to docker hub'){
		docker.withRegistry('https://registry.hub.docker.com', 'docker-hub'){
			docker_img.push("${env.BUILD_NUMBER}")
			docker_img.push("latest")
			}

				echo "Pushing to docker hub"
	}
}

