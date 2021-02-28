module.exports = function reverse(n) {
	let nMathabs = Math.abs(n)

	let ntoString = nMathabs.toString()

	let nsplit = ntoString.split('')

	if (nsplit[nsplit.length - 1] == 0) {
		nsplit.pop()
	}

	nsplit = nsplit.reverse()
	nsplit = nsplit.join('')

	Number(nsplit)

	return nsplit
}
