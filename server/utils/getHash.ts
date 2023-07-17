import crypto from 'crypto';

export default function hash(data: string | Buffer, algorithm = 'sha256') {
    return crypto.createHash(algorithm).update(data).digest('hex');
}