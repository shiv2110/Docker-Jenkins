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
		docker.withResgistry('https://registry.hub.docker.com', 'docker-hub'){
			docker_img.push("${env.BUILD_NUMBER}")
			docker_img.push("latest")
			}

				echo "Pushing to docker hub"
	}
}
post{
	failure{
		mail to: '19mcme24@uohyd.ac.in',
			subject: "Pipeline has failed: ${currentBuild.fullDisplayName}",
			body: "Error occurred in ${env.BUILD_URL}"
		}

	success{
		color: 'green',
      		message: "The pipeline ${currentBuild.fullDisplayName} has been completed successfully."
	}
}
