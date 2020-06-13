function feed(parent, args, context, info) {
    return context.prisma.links()
}

function info(parent, args, context, info) {
    return `This is the API of a Hackernews Clone`
}

function link(root, args, context, info) {
    return context.prisma.link({ id: args.id })
}

module.exports = {
    info,
    feed,
    link
}