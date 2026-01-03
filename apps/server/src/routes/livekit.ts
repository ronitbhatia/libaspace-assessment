import { Router, Request, Response } from 'express';
import { AccessToken } from 'livekit-server-sdk';
import { LiveKitTokenRequest, ApiResponse, LiveKitTokenResponse } from '@libaspace/shared';

const router = Router();

// Generate LiveKit access token
router.post('/token', async (req: Request, res: Response) => {
  try {
    const { roomName, participantName }: LiveKitTokenRequest = req.body;
    
    if (!roomName || !participantName) {
      return res.status(400).json({
        success: false,
        error: 'roomName and participantName are required'
      });
    }
    
    const apiKey = process.env.LIVEKIT_API_KEY;
    const apiSecret = process.env.LIVEKIT_API_SECRET;
    const wsUrl = process.env.LIVEKIT_WS_URL;
    
    if (!apiKey || !apiSecret || !wsUrl) {
      console.error('LiveKit credentials not configured');
      return res.status(500).json({
        success: false,
        error: 'LiveKit not configured on server'
      });
    }
    
    // Create access token
    const token = new AccessToken(apiKey, apiSecret, {
      identity: participantName,
      ttl: '2h'
    });
    
    // Grant permissions
    token.addGrant({
      room: roomName,
      roomJoin: true,
      canPublish: true,
      canSubscribe: true,
      canPublishData: true
    });
    
    const jwt = await token.toJwt();
    
    const response: ApiResponse<LiveKitTokenResponse> = {
      success: true,
      data: {
        token: jwt,
        url: wsUrl
      }
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error generating LiveKit token:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to generate token'
    });
  }
});

// Get room info
router.get('/room/:roomName', async (req: Request, res: Response) => {
  try {
    const { roomName } = req.params;
    
    // TODO: Implement room info retrieval using LiveKit SDK
    // For now, return mock data
    res.json({
      success: true,
      data: {
        name: roomName,
        participants: [],
        createdAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error fetching room info:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch room info'
    });
  }
});

export default router;

