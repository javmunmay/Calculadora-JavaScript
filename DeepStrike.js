function validateTarget(lat, lon) {
    
    if (typeof lat !== 'number' || typeof lon !== 'number') {
        return false;
    }
    
    
    if (lat >= 17.0 && lat <= 53.0 && lon >= 73.0 && lon <= 135.0) {
        return true;
    }
    
    return false;
}



module.exports = { validateTarget };