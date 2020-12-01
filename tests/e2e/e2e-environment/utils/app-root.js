const path = require( 'path' );

const getAppRoot = () => {
    // Figure out where we're installed.
    // Typically will be in node_modules/, but WooCommerce
    // uses a local file path (tests/e2e/e2e-environment).
    let appPath = false;
    const moduleDir = path.dirname( require.resolve( '@woocommerce/e2e-environment' ) );

    if ( -1 < moduleDir.indexOf( 'node_modules' ) ) {
        appPath = moduleDir.split( 'node_modules' )[ 0 ];
    } else if ( -1 < moduleDir.indexOf( 'tests/e2e/e2e-environment' ) ) {
        appPath = moduleDir.split( 'tests/e2e/e2e-environment' )[ 0 ];
    }

    return appPath;
};

const getAppName = () => {
	const appRoot = getAppRoot();
	return path.basename( appRoot );
};

module.exports = {
	getAppRoot,
	getAppName,
};
