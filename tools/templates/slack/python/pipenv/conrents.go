package pipenv

import "github.com/abdfnx/botway/tools/templates"

func DockerfileContent(botName string) string {
	return templates.Content("slack", "python", "pipenv/Dockerfile", botName)
}
