module.exports = async (pharmacy, res) => {
    const pharmacyToken = await pharmacy.getJwtToken();
  
    const cookieOptions = {
      expires: new Date(Date.now() + process.env.COOKIE_EXPIRY * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    };
  
    pharmacy.password = undefined;
  
    return res.status(201).cookie("token", pharmacyToken, cookieOptions).json({
      success: true,
      pharmacy,
      pharmacyToken,
    });
  };
  