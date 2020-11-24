export function ArtifactTypeImages(type){
    const image_template = "https://swstats.info/static/website/images/artifacts/artifact_<type>.png"

    return image_template.replace('<type>', type.toLowerCase());
}